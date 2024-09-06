import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledSpinner = styled(motion.div)`
  flex: 1;
  display: grid;
  place-items: center;
  .spinner {
    animation: spin 500ms linear infinite;
    line-height: 0;
    font-size: 2rem;
  }
  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
