import Footer from "./components/footer"

export function App(props) {
  return (
    <>
      <h1>Cryptex</h1>

      <p>A website for me and my bot</p>

      <p>Want to invite it? I'm sure you do, <a href="https://discord.com/oauth2/authorize?client_id=787927476177076234&permissions=2486562007&scope=bot%20applications.commands" target="_blank">Click here</a></p>

      <Footer />
    </>
  )
}
