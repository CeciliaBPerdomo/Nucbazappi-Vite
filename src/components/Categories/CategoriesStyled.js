import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin: 0 15px;
    @media (max-width: 768px){
        padding-top: 30px; 
        text-align: center;
    }
`;

export const CategoriasContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-around; 
    align-items: center;
    gap: 20px;
`

export const CardCategoria = styled(motion.div)`
    background-color: var(--gray-bg);
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    gap: 0.5rem; 
    width: 150px; 
    padding: 2rem 0.5rem;
    border-radius: 15px; 
    cursor: pointer;

    h2 {
        font-size: 1rem; 
    }
`

export const BorderDecoration = styled.div`
    height: 5px; 
    width: 30%; 
    border-radius: 15px; 
    background: var(--btn-gradient); 
`