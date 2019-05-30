import React from 'react';

export type QuestionId = string;

export interface Question {
    answer: React.ReactChild;
    id: QuestionId;
    question: string;
}
