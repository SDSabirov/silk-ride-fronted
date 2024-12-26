import { defineStore } from "pinia";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    currentStep: 1, // Tracks the current step in the booking process
    bookingType: "pointToPoint", // Default booking type
    serviceType: "pointToPoint", // Stores the selected service type
    dropoffLocation: "", // Stores the selected drop-off location
    hours: null, // Stores the selected number of hours for hourly service
  }),

  actions: {
    setBookingType(type) {
      this.bookingType = type; // Update the booking type
    },
    setServiceType(type) {
      this.serviceType = type; // Update the service type
    },
    setDropoffLocation(location) {
      this.dropoffLocation = location; // Update the drop-off location
    },
    setHours(hours) {
      this.hours = hours; // Update the hours for hourly service
    },
    nextStep() {
      this.currentStep++; // Move to the next step
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--; // Move to the previous step
      }
    },
    resetBooking() {
      // Reset all booking details
      this.currentStep = 1;
      this.bookingType = "pointToPoint";
      this.serviceType = "";
      this.dropoffLocation = "";
      this.hours = null;
    },
  },

  getters: {
    isPointToPoint: (state) => state.bookingType === "pointToPoint", 
    isHourly: (state) => state.bookingType === "hourlyService", 
    isComplete: (state) => state.currentStep > 4, 
  },
});
