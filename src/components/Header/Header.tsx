import styles from "./Header.module.css";
import { View } from "../App";

type HeaderProps = {
  projectName: View;
  setView: (view: View) => void;
}

function Header(props: HeaderProps) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <button className={styles.title} onClick={() => props.setView("Portfolio")}>
            React Showcase
          </button>
          {props.projectName != "Portfolio" && (
            <h2 className={styles.projectName}>{props.projectName}</h2>
          )}
          <div className={styles.language}>
            <button className={styles.active}>
              <img src="https://s3-alpha-sig.figma.com/img/300f/0a14/b9ee86f478ab610fa83ab85ef5068efd?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M0B5PHQQN5olmBc06kEmR7lBoUsGkdmpsCPB59aPs0T5XHhiP3yVPO2kUbw1SG~CDGbhzpxJUTLKELzCRjKdGLgtARTy45MhAH43oY42LWPmyxjCk~lB~quJ4B5w0pf5akCWSEpzkvXf7LvyO9lGdrLxTly8coaSG5OhZBodXTPOqV-OEXZIRapGM3M6T1PdjuTWVHUn1bNbNa1-vVdVNZUZT1Xl1cpIFbeYtKGOr7bsb~cqfyLYGP6CwphcntWhc3IuRmFaPfgFTzt-F5HwJt30YlCcSoM16QNcsMONCoey26TB1~DCp0rhqvdfwcm8vu~XKx3sGch4p~B3sWMoSA__"></img>
            </button>
            <button>
              <img src="https://s3-alpha-sig.figma.com/img/6fad/a586/88f050034b3fac5d9467d0baa4e78cba?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SQj--yKO7aSJWXPBC8K5cJ5bvtsjn5HZZGkb78lNpoA3I71VYVVIxjguwPwhv7p7mPljxE3ACkj8nwAEIHQkCefct9Vo1Cs2w0vR4cjhvAtkRJBkYLHncwcMniVdptoIvDT5KcSWkVnRM8Qevcpge9hmhh7O6sajVHfBhLI4-9np4VMEeW2oYhI1p3ylhSRSI9PjysNzrOSuMX1LvzXHGpWIU42ZfaBEW7L1TylVaKJaSeA3-~xi9OxcxwNKp7K26SCx5l00CBL823Yz2z1PI0AN7fVpKSnyfXVbMYbjClTZ9TW05Rbecnf0nw~qTclUNWsuC84qa26qSAuLkW0ESg__"></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
