/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'mobile': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      fontFamily: {
        'Poppins':[ "Poppins", 'sans-serif']
      },
      backgroundImage: {
        'bg-header': "url(../images/image.jpg)",
        'time': "url(../images/time.jpg)",
        'focus': "url(../images/focus.jpg)",
        'house': "url(../images/image_house.jpg)",
        'note' : "url(../images/image_note.jpg)",
        'forest': "url(../images/image_forest.jpg)",
        'deer': "url(../images/image_deer.jpg)",
        'mountain': "url(../images/mountain.jpg)",
        'photo': "url(../images/photo.jpg)",
        'palm': "url(../images/palm.jpg)",
        'sky': "url(../images/sky.jpg)",
      }
    },

  },
  plugins: [],
}

