import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import ContentCriterionBlockSummary from "../../components/pages/summary/ContentCriterionBlockSummary";
import { ContentElementaryCriterion } from "../../content_data/contentElementary";


export default class ContentPrintElementaryPage extends React.Component {
    componentDidMount() {
        this.props.resetPrintButtonState(C.CONTENT_PAGE);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation
                    dimensionName={C.CONTENT_PAGE}
                    dimensionSummary={C.CONTENT_SUMMARY_TEXT}
                    {...this.props}
                    reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEM_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[0].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[0].title}
                    criterionLead={ContentElementaryCriterion.criterion[0].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[0].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[0].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[0].criterionDoesNotMeetText}
                {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEM_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[1].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[1].title}
                    criterionLead={ContentElementaryCriterion.criterion[1].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[1].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[1].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[1].criterionDoesNotMeetText}
                    {...this.props} />


                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEM_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[2].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[2].title}
                    criterionLead={ContentElementaryCriterion.criterion[2].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[2].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[2].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[2].criterionDoesNotMeetText}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEM_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[3].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[3].title}
                    criterionLead={ContentElementaryCriterion.criterion[3].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[3].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[3].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[3].criterionDoesNotMeetText}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEM_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[4].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[4].title}
                    criterionLead={ContentElementaryCriterion.criterion[4].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[4].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[4].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[4].criterionDoesNotMeetText}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEM_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[5].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[5].title}
                    criterionLead={ContentElementaryCriterion.criterion[5].criterionLead}
                    criterionMeetsText={ContentElementaryCriterion.criterion[5].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[5].criterionDoesNotMeetText}
                    {...this.props} />

                <hr className="hr
                                u-mb30
                                u-mt30" />

                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey={C.CONTENT_ELEM_KEY}
                    dimensionName={C.CONTENT_PAGE}
                    dimensionLead={C.CONTENT_LEAD_TEXT}
                    strongText={C.CONTENT_STRONG_TEXT}
                    moderateText={C.CONTENT_MODERATE_TEXT}
                    limitedText={C.CONTENT_LIMITED_TEXT}
                    {...this.props} />

                <ContentCriterionBlockSummary {...this.props} />
            </React.Fragment>
        );
    }
}
