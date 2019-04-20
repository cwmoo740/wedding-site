import {Set} from 'immutable';
import React from 'react';
import {QuestionId} from './common';
import Question, {Props as QuestionProps} from './question';

interface Props {
    questions: Array<Pick<QuestionProps, 'question' | 'answer' | 'id'>>;
}

interface State {
    active: Set<QuestionId>;
}

class QuestionList extends React.PureComponent<Props, State> {

    public render() {
        return this.props.questions.map(({question, answer, id}) => (
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
    }

    private readonly onClick = (id: QuestionId) => {
        if (this.state.active.has(id)) {
            this.setState({active: this.state.active.remove(id)});
        } else {
            this.setState({active: this.state.active.add(id)});
        }
    }
}

export default QuestionList;
