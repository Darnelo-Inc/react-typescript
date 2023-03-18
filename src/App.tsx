import Card, { CardVariants } from "./components/Card"

function App() {
  return (
    <Card
      width="300px"
      height="200px"
      onClick={(num) => console.log(num)}
      variant={CardVariants.outlined}
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aperiam
        at harum numquam officiis molestiae beatae esse praesentium architecto
        fugit perferendis a repudiandae, dolor odit, eligendi tempora?
        Distinctio, blanditiis obcaecati.
      </p>
    </Card>
  )
}

export default App
