import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../context';
import SearchContent from '../components/SearchContent';
import SearchAppBar from '../components/SearchAppBar';
import withRoot from '../withRoot';

const mapStateToProps = (store) => ({
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentQuerry: (payload) => dispatch(actions.search.currentQuerryAction(payload)),
});

type Styles = {

};

const styles: Styles = {

};

type Props = {
  classes: Styles,
  match: Object,
}

class Search extends React.PureComponent<Props> {
  render() {
    const { match } = this.props;
    const { currentQuery } = match.params;
    return (
      <div>
        <SearchAppBar query={currentQuery} />
        <SearchContent />
      </div>
    );
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot((Search)));
