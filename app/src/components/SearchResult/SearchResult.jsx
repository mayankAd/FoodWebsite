import styled from "styled-components"







const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
      <FoodCards>
{
    data?.map((food) => <FoodCard key = {food.name}>
        {food.text}
    </FoodCard>))

      </FoodCards>
    </FoodCardContainer>
  )
}

export default SearchResult


const FoodCardContainer= styled.section`

background-image: url("/bg.png");
height: calc(100vh - 220px);
background-size: cover;

`
const FoodCards = styled.div``
const FoodCard = styeld.div``