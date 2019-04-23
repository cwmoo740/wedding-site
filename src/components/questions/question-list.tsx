import {Set} from 'immutable';
import React from 'react';
import {QuestionId} from './common';
import Question from './question';
import questions from './questions';

interface State {
    active: Set<QuestionId>;
}

class QuestionList extends React.PureComponent<{}, State> {

    public state: State = {
        active: Set(),
    };

    public render() {
        const html = questions.map(({question, answer, id}) => (
                <Question
                    active={this.state.active.has(id)}
                    answer={answer}
                    id={id}
                    key={id}
                    onClick={this.onClick}
                    question={question}
                />
            ),
        );
        return (
            <section className='section'>
                <div className='container is-widescreen is-gapless'>
                    <h1 className='title has-text-centered'>
                        Questions
                    </h1>
                    <div className='columns' style={{flexWrap: 'wrap'}}>
                        {html}
                    </div>
                </div>
            </section>
        );
    }

    private readonly onClick = (id: QuestionId) => {
        if (this.state.active.has(id)) {
            this.setState({active: this.state.active.remove(id)});
        } else {
            this.setState({active: this.state.active.add(id)});
        }
    };
}

export default QuestionList;
