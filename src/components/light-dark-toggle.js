import IconDark from 'jsx:../assets/icon-dark-mode.svg'
import IconLight from 'jsx:../assets/icon-light-mode.svg'

export default function LightDarkToggle(props) {
  return <div>
    <button>
      <IconDark/>
    </button>
    <button>
      <IconLight/>
    </button>
  </div>
}
