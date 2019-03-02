module.exports = {
  components: {
    categories: [
      {
        name: 'Componentes para formas',
        include: [
          'src/Icon/Icon.js',
          'src/Text/Text.js',
          'src/Input/Input.js',
          'src/Textarea/Textarea.js',
          'src/Selectlist/Selectlist.js',
          'src/Dropdown/Dropdown.js',
          'src/DropdownItem/DropdownItem.js',
        ],
      },
      {
        name: 'Botones',
        include: [
          'src/Button/Button.js',
          'src/Link/Link.js',
          'src/Back/Back.js',
          'src/ProcessBar/ProcessBar.js',
          'src/ProcessButton/ProcessButton.js',
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
