import { defineStore } from "pinia";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    currentStep: 1, // Tracks the current step in the booking process
    bookingType: "airportTransfer", // Default booking type (e.g., "pointToPoint", "hourlyService", "airportTransfer")
    serviceType: "airportTransfer", // Stores the selected service type
    dropoffLocation: "", // Stores the selected drop-off location

    // Consolidated form data for all booking types (steps 1 and 3)
    form: {
      // Step 1 & Airport Transfer fields:
      pickup: "",
      dropoff: "",
      pickupDateTime: "",
      flightNumber: "",
      airport: "",
      tripType: "", // "arrival" or "departure"
      hours: null, // For hourly service


      // Step 3: Contact and additional details
      name: "",
      surname: "",
      phone: "",
      email: "",
      specialRequests: "",
      // Passenger counts (if needed in step 1 or 3)
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    },

    // Address suggestions for auto-complete inputs
    suggestionsPickup: [],
    suggestionsDropoff: [],

    // Selected car from step 2
    selectedCar: null,

    errors: {}, // Holds error messages for each field as needed
  }),

  actions: {
    setBookingType(type) {
      this.bookingType = type;
    },
    setServiceType(type) {
      this.serviceType = type;
    },
    setDropoffLocation(location) {
      this.dropoffLocation = location;
    },
    setHours(hours) {
      this.form.hours = hours;
    },
    // Update any form data fields by merging new data
    setFormData(newForm) {
      this.form = { ...this.form, ...newForm };
    },
    setSuggestionsPickup(suggestions) {
      this.suggestionsPickup = suggestions;
    },
    setSuggestionsDropoff(suggestions) {
      this.suggestionsDropoff = suggestions;
    },
    // Set the selected car from step 2
    setSelectedCar(car) {
      this.selectedCar = car;
    },
    nextStep() {
      this.errors = {};

      // Validate fields based on the current step
      if (this.currentStep === 1) {
        // Step 1 requires pickup address and pickupDateTime, plus hours if booking is hourly
        if (!this.form.pickup || !this.form.pickup.trim()) {
          this.errors.pickup = "Pickup location is required.";
        }
        if (!this.form.pickupDateTime) {
          this.errors.pickupDateTime = "Pickup date & time are required.";
        }
        if (this.bookingType === "hourlyService" && !this.form.hours) {
          this.errors.hours = "Number of hours is required for hourly service.";
        }
        if (this.bookingType === "airportTransfer" && !this.form.airport) {
          this.errors.airport = "Airport required.";
        }
      }

      if (this.currentStep === 2) {
        // Step 2 requires vehicle selection
        if (!this.selectedCar ) {
          this.errors.selectedCar = "Please select a vehicle.";
        }
      }

      if (this.currentStep === 3) {
        // Step 3 requires contact details
        if (!this.form.name || !this.form.name.trim()) {
          this.errors.name = "First name is required.";
        }
        if (!this.form.surname || !this.form.surname.trim()) {
          this.errors.surname = "Surname is required.";
        }
        if (!this.form.phone || !this.form.phone.trim()) {
          this.errors.phone = "Phone number is required.";
        }
        if (!this.form.email || !this.form.email.trim()) {
          this.errors.email = "Email is required.";
        }
      }

      // If there are any validation errors, do not proceed to the next step
      if (Object.keys(this.errors).length > 0) {
        return false;
      }
      this.currentStep++;
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    resetBooking() {
      // Reset all booking details
      this.currentStep = 1;
      this.bookingType = "pointToPoint";
      this.serviceType = "pointToPoint";
      this.dropoffLocation = "";
      this.form = {
        pickup: "",
        dropoff: "",
        pickupDateTime: "",
        flightNumber: "",
        airport: "",
        tripType: "",
        hours: null,
        passengers: {
          adults: 1,
          children: 0,
          infants: 0,
        },
        name: "",
        surname: "",
        phone: "",
        email: "",
        specialRequests: "",
      };
      this.suggestionsPickup = [];
      this.suggestionsDropoff = [];
      this.selectedCar = null;
    },
  },

  getters: {
    isPointToPoint: (state) => state.bookingType === "pointToPoint",
    isHourly: (state) => state.bookingType === "hourlyService",
    isAirportTranfer: (state) => state.bookingType === "airportTransfer",
    isComplete: (state) => state.currentStep > 4,
  },
});
