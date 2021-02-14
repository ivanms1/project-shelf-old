import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

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
