import { LINKS } from "../utils/constants"
import Wrapper from "./Wrapper"

export default function Header() {
  return (
    <div className="flex min-h-[5rem] border-b border-slate-900/10 dark:border-slate-300/10">
      <Wrapper className="justify-between">
        <h1>Lorenzo Corallo</h1>
        <a
          href={LINKS.vscode}
          target="_blank"
          className="duration-100 ease-out hover:text-sky-500 dark:hover:text-sky-400"
        >
          VSCode
        </a>
      </Wrapper>
    </div>
  )
}
