import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCrow} from '@fortawesome/free-solid-svg-icons'
import {links} from '@/data/links';
import {Button} from '@/components/button';
export default function Home() {
    return (
        <div className={'main'}>
            <div className='splash'>
                <h1><FontAwesomeIcon icon={faCrow} className={'icon'}/></h1>
                <h1>{'Fred Davison'}</h1>
                <h2>{'Software Engineer'}</h2>
                <br/>
                <div className={'flex'}>
                    {links.map(link => <Button key={link.label} link={link}/>)}
                </div>
            </div>
        </div>
    )
}
