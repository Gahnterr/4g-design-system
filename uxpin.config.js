module.exports = {
  components: {
    categories: [
      {
        name: 'Componentes básicos',
        include: [
          'src/Button/Button.js',
          'src/Link/Link.js',
          'src/Icon/Icon.js',
          'src/Text/Text.js',
          'src/Form/Form.js',
          'src/Input/Input.js',
          'src/Textarea/Textarea.js',
          'src/Selectlist/Selectlist.js',
        ],
      },
      {
        name: 'Componentes avanzados',
        include: ['src/Modal/Modal.js'],
      },
    ],
  },
  name: '4G Design system',
};
