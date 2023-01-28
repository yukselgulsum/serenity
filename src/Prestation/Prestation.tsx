import { StyledTitle, StyledWrapper, StyledDescription } from "./styled"

export interface PrestationProps {
  title: string;
  description: string;
}

export const Prestation: React.FC<PrestationProps> = ({title, description}) => {
  return(
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledWrapper>
  )
}