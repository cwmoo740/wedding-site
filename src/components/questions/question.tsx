import React from 'react';
import {Question as IQuestion, QuestionId} from './common';

export interface Props extends IQuestion {
    active: boolean;

    onClick(id: QuestionId): void;
}

class Question extends React.PureComponent<Props> {

    public render() {
        return (
            <article className='message'>
                <div className='message-header' onClick={this.onClick}>
                    {this.props.question}
                </div>
                {
                    this.props.active &&
                    <div className='message-body'>
                        {this.props.answer}
                    </div>
                }
            </article>
        );
    }

    private readonly onClick = () => this.props.onClick(this.props.id);
}

export default Question;
