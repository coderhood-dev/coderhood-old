const Button = {
  
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  

  sizes: {
    sm: {
      fontSize: '12px',
      padding: '16px',
    },
    md: {
      fontSize: '16px',
      padding: '24px',
    },
  },

  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'blue.500',
    },
    solid: {
      bg: 'black',
      color: 'white',
    },
    coderhood: {
      bg: '#f26840',
      color: 'white',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};

export default Button;
