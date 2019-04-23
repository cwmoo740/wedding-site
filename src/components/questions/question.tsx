import classnames from 'classnames';
import React from 'react';
import {Question as IQuestion, QuestionId} from './common';
import * as scss from './question.module.scss';

export interface Props extends IQuestion {
    active: boolean;

    onClick(id: QuestionId): void;
}

class Question extends React.PureComponent<Props> {

    public render() {
        return (
            <div className='column is-half'>
                <article className={classnames('message', scss.question)} onClick={this.onClick}>
                    <div className='message-header'>
                        {this.props.question}
                    </div>
                    {
                        this.props.active &&
                        <div className='message-body'>
                            {this.props.answer}
                        </div>
                    }
                </article>
            </div>
        );
    }

    private readonly onClick = () => this.props.onClick(this.props.id);
}

export default Question;
