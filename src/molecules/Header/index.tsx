import { Button } from '@/atoms/Button'
import { Wrapper } from '@/atoms/Wrapper'

export interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Wrapper className='flex items-center justify-between'>
        <div>logo</div>
        <ul className='flex gap-4 lg:gap-16'>
          <li>Cores</li>
          <li>Saiba Mais</li>
          <li>Sobre Nós</li>
        </ul>
        <div>
          <Button>Comprar Agora</Button>
        </div>
      </Wrapper>
    </header>
  )
}
