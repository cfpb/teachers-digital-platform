import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import EfficacyCriterionPage from '../js/components/pages/EfficacyCriterionPage';
import renderer from 'react-test-renderer';

let result;
const efficacyProps = {
    currentPage:"EfficacyCriterionPage",
    criterionAnswers: {},
    criterionNotes:{},
    criterionEfficacyStudies:[0],
    studyCount: 0,
    studyAnswers: {0: "efficacy-crt-question-#0#study"},
    changeEfficacyAnswer: _changeEfficacyRadio.bind(this),
    changeEfficacyNotes:_changeEfficacyNotes.bind(this),
    setDistinctiveComplete:_handleSummaryButtonClick.bind(this),
    initializeAnswerObjects:(() => { }),
    criterionCompletionStatuses:(() => {}),
    criterionScores:(() => {}),
    setCriterionStatusToInStart:(() => {}),
    setCriterionTitleLinkClicked:(() => {}),
    initializeStudyAnsers:(() => {}),
}

beforeAll(() => {
  result = renderer.create(
    <EfficacyCriterionPage {...efficacyProps}/>,
  );
});
      
afterAll(() => {
    result.unmount();
});

test ('Efficacy Criterion Page uses state to populate values', () => {
    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});

function _changeEfficacyRadio (key, checkedValue) {
}

function _changeEfficacyNotes (key, textValue) {
}


function _handleSummaryButtonClick () {
}
