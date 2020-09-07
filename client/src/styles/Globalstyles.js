import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,800;0,900;1,700&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-size:16px;
    font-weight:400;
}

html{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-size:16px;
    font-weight:400;
}

body{
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    
}

button{
    cursor: pointer;
}

li{
    list-style:none;
}
`;