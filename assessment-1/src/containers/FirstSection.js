import { ShadedButton } from '../components/Buttons';
import { FormInput } from '../components/Inputs';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MainSection = () => (
    <section className='first_section'>
        <div>
            <h1>Rethink Your<br />living & renting</h1>
            <h2>Make your stay painless with us</h2>
        </div>
        <form>
            <FormInput label="CITY" placeholder="Select your city" />
            <FormInput label="DATES" placeholder="Select your dates" />
            <FormInput label="GUESTS" placeholder="Add guests" />
            <ShadedButton search>
                <FontAwesomeIcon icon={faSearch} />
                &nbsp;
                Search
            </ShadedButton>
        </form>
        <div className='mobile_only'>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
    </section>
)