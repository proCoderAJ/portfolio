import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @keyframes float {
    0% { 
      transform: translateY(100vh) rotate(0deg); 
    }
    100% { 
      transform: translateY(-100px) rotate(360deg); 
    }
  }

  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(50px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes textGlow {
    0% { 
      filter: brightness(1); 
    }
    100% { 
      filter: brightness(1.2); 
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes spin {
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  // Enhanced focus styles
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  a:focus-visible {
    outline: 2px solid #FFD700;
    outline-offset: 2px;
    border-radius: 4px;
  }

  // Smooth transitions for interactive elements
  button, 
  input, 
  textarea, 
  select, 
  a {
    transition: all 0.3s ease;
  }
`

export default GlobalStyles