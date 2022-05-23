import TextBlock from "../components/text Block/TextBlockComponents"

export default function Footer () {

  return (
    <>
      <TextBlock>

        <TextBlock.Section mflex="column">
          <TextBlock.Title>
            React E-Commerce
          </TextBlock.Title>

          <TextBlock.Section mflex="row">
            <TextBlock.Text>
             ©1990-2021
            </TextBlock.Text>
            <TextBlock.Text>
              Privacy
            </TextBlock.Text>
            <TextBlock.Text>
              Terms
            </TextBlock.Text>
          </TextBlock.Section>
        </TextBlock.Section>


        <TextBlock.Group mflex="column">

        <TextBlock.Section mflex="column">
          <TextBlock.Subtitle>
            Contact
          </TextBlock.Subtitle>

          <TextBlock.Section mflex="row">
            <TextBlock.Text>
              Email
            </TextBlock.Text>
            <TextBlock.Text>
              Phone
            </TextBlock.Text>
            <TextBlock.Text>
              Form
            </TextBlock.Text>
          </TextBlock.Section>
        </TextBlock.Section>

        <TextBlock.Section mflex="column">
          <TextBlock.Subtitle>
            Employment
          </TextBlock.Subtitle>

          <TextBlock.Section mflex="row">
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
          </TextBlock.Section>
        </TextBlock.Section>

        <TextBlock.Section mflex="column">
          <TextBlock.Subtitle>
            Help
          </TextBlock.Subtitle>

          <TextBlock.Section mflex="row">
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
          </TextBlock.Section>
        </TextBlock.Section>

        <TextBlock.Section mflex="column">
          <TextBlock.Subtitle>
            About
          </TextBlock.Subtitle>

          <TextBlock.Section mflex="row">
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
            <TextBlock.Text>
              Filler Test
            </TextBlock.Text>
          </TextBlock.Section>
        </TextBlock.Section>

        </TextBlock.Group>

      </TextBlock>
    </>
  )

}