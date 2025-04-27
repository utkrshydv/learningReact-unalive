export default function Layout(props){
  const { children } = props

  const header = (
    <header>
      <h1 className="text-medium text-gradient">Unalive</h1>
    </header>
  )

  const footer = (
    <footer>
      <small>Created by</small>
      <a target="_blank" href="https://github.com/utkrshydv">
      <img alt="pfp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtv16YrI1-Sg4ae5MvmK_FShWeEc76W0Sh82HQ2zd5XZ4ZYhAXkS1YIUBLfmsRzHQk38&usqp=CAU"/>
      <p>https://github.com/utkrshydv</p>
     
      </a>


    </footer>
  )
  return(
    <>
    {header}
    <main>
       {children}
    </main>
    {footer}
    </>
  )
}