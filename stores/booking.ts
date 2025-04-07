import { defineStore } from "pinia";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    currentStep: 1, // Tracks the current step in the booking process
    bookingType: "pointToPoint", // Default booking type (e.g., "pointToPoint", "hourlyService", "airportTransfer")
    serviceType: "pointToPoint", // Stores the selected service type
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

      // Passenger counts (if needed in step 1 or 3)
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
      },

      // Step 3: Contact and additional details
      name: "",
      surname: "",
      phone: "",
      email: "",
      specialRequests: "",
    },

    // Address suggestions for auto-complete inputs
    suggestionsPickup: [],
    suggestionsDropoff: [],

    // Selected car from step 2
    selectedCar: null,
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
