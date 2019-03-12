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
        name: 'Grids',
        include: [
          'src/Table/Table.js',
          'src/TableHeader/TableHeader.js',
          'src/TableBody/TableBody.js',
          'src/TableRow/TableRow.js',
          'src/TableTH/TableTH.js',
          'src/TableTD/TableTD.js',
        ],
      },
      {
        name: 'Modales',
        include: [
          'src/Modal/Modal.js',
          'src/ModalHeader/ModalHeader.js',
          'src/ModalBody/ModalBody.js',
          'src/ModalFooter/ModalFooter.js',
          'src/ModalM2/ModalM2.js',
        ],
      },
      {
        name: 'Layout',
        include: [
          'src/CSSGridContainer/CSSGridContainer.js',
          'src/CSSGridItem/CSSGridItem.js',
          'src/FlexboxContainer/FlexboxContainer.js',
          'src/FlexboxItem/FlexboxItem.js',
        ],
      },
    ],
  },
  name: '4G Design system',
};
