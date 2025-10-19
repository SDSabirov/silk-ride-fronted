// Centralized pricing configuration for Silk Ride
// Update prices here to reflect across the entire site

export const PRICING = {
  // Hourly rates
  hourly: {
    eClass: 50,
    sClass: 75,
    vClass: 75,
  },

  // Airport transfers to Central London
  airportTransfers: {
    heathrow: {
      eClass: 120,
      sClass: 160,
      vClass: 160,
    },
    gatwick: {
      eClass: 180,
      sClass: 230,
      vClass: 230,
    },
    stansted: {
      eClass: 200,
      sClass: 250,
      vClass: 250,
    },
    luton: {
      eClass: 200,
      sClass: 240,
      vClass: 240,
    },
    bigginHill: {
      eClass: 170,
      sClass: 210,
      vClass: 210,
    },
    farnborough: {
      eClass: 240,
      sClass: 270,
      vClass: 270,
    },
  },

  // Helper functions for formatting
  formatHourly: (price: number) => `£${price}/hour`,
  formatFixed: (price: number) => `£${price}`,
  formatFrom: (price: number) => `From £${price}`,
}

// Export individual pricing sections for convenience
export const { hourly, airportTransfers, formatHourly, formatFixed, formatFrom } = PRICING
