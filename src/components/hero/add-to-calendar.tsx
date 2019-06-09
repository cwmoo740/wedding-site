import classnames from 'classnames';
import React from 'react';
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import onClickOutside from 'react-onclickoutside';
import * as scss from './add-to-calendar.module.scss';

const event = {
    description: 'Come celebrate the marriage of Cindy and Jeff',
    duration: '0500',
    endDatetime: '20191026T220000',
    location: '20765 E Gold Rush Rd, Gold Canyon, AZ 85118',
    startDatetime: '20191026T170000',
    timezone: 'America/Phoenix',
    title: 'Cindy and Jeff Wedding',
};

function Dropdown({children}: any) {
    return (
        <div className='dropdown-menu'>
            <div className='dropdown-content'>
                <h3 style={{color: 'black'}}>Add to Calendar</h3>
                <hr className='dropdown-divider'/>
                {children}
            </div>
        </div>
    );
}

function Button({children, onClick, dateTime}: any) {
    return (
        <div className='dropdown-trigger' title='Add to Calendar'>
            <button className={scss.button}>
                <time dateTime={dateTime} onClick={onClick}>
                    {children}
                </time>
            </button>
        </div>
    );
}

class AddToCalendar extends React.Component {
    private COMPONENT = AddToCalendarHOC(Button, Dropdown);
    private dropdown: React.Component<any, {dropdownOpen: boolean}> | null = null;

    public render() {
        const COMPONENT = this.COMPONENT;
        return (
            <div className={classnames('dropdown', 'is-active', scss.container)}>
                <COMPONENT
                    ref={(x: React.Component<any, {dropdownOpen: boolean}>) => this.dropdown = x}
                    event={event}
                    buttonText={<span>October 26, 2019 <br/>16:30</span>}
                    buttonProps={{dateTime: '2019-10-26 23:30:00.000Z'}}
                    linkProps={{className: classnames('dropdown-item', 'button', scss.dropdownItem)}}
                />
            </div>
        );
    }

    private handleClickOutside(ev: React.MouseEvent<any>): void {
        if (this.dropdown && this.dropdown.state.dropdownOpen) {
            this.dropdown.setState({dropdownOpen: false});
        }
    }
}

export default onClickOutside(AddToCalendar);
