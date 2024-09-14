/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      Natural_Black : "#263238",
      Natural_D_Gray : "#4d4d4d", 
      Natural_Gray : "#717171", 
      Natural_L_Black : "#89939e",
      Natural_Gray_Blue : "#ABBED1",
      Natural_Silver : "#F5F7FA",
      Natural_White : "#FFFFFF",
      Primary : "#28CB3B",
      Secondary : "#263238",
      Info : "#2194f3", 
      Shade1 : "#43a046",
      Shade2 : "#388e3b",
      Shade3 : "#237d31",
      Shade4 : "#1B5E1F",
      Shade5 : "#103e13",
      Tint1: "#66BB69",
      Tint2: "#81C784",
      Tint3: "#A5D6A7",
      Tint4: "#C8e6c9",
      Tint5: "#e8f5e9",
      Warning : "#fbc02d",
      Error : "#e53835",
      Success : "#2E7D31",
    },
    fontFamily : {
        'Inter' :['Inter'],
    },
    boxShadow: {  
      shadow1: '0 1px 1.7px rgba(171, 190, 209,10)',
    },
    extend: {},
  },
  plugins: [],
}