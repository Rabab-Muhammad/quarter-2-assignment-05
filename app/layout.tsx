import "./globals.css";

type MainLayoutProp={
  children:React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProp> = (props) => {
  console.log(props,"props");
  return(
    <html lang="en">
      <body>
        {props.children}
      </body >
    </html>
  )
  
}

 export default MainLayout;
