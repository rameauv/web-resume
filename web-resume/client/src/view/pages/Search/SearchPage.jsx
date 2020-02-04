import { connect } from 'react-redux';
import React from 'react';
import { actions } from '../../../context';
import withRoot from '../../withRoot';
import { IMainState } from '../../../modules/store';
import { User } from '../../../model/User';
import SearchContent from './SearchContent';
import SearchAppBar from '../../components/SearchAppBar';

const mapStateToProps = (store: IMainState) => ({
  results: store.search.results,
  isNewQuery: store.search.isNewQuery,
  currentQuery: store.search.currentQuery,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (payload) => dispatch(actions.search.fetchAction(payload)),
  setCurrentQuery: (payload) => dispatch(actions.search.currentQueryAction(payload)),
});

export type Props = {
  match: any,
  currentQuery: string,
  results: Array<User>,
  fetch: (payload: string) => void,
  setCurrentQuery: (payload: string) => void,
}

export class SearchPage extends React.PureComponent<Props> {
  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    const { match, currentQuery } = this.props;
    const { currentQuery: urlQuery } = match.params;
    this.updateQueryIfNew(urlQuery);
    this.fetchIfNew(currentQuery);
  }

  fetchIfNew(query: string) {
    const { fetch } = this.props;
    fetch(query);
  }

  updateQueryIfNew(query: string) {
    const { setCurrentQuery } = this.props;
    setCurrentQuery(query);
  }

  render() {
    const { match, results } = this.props;
    const { currentQuery } = match.params;
    return (
      <div>
        <SearchAppBar query={currentQuery} />
        <SearchContent results={results} />
      </div>
    );
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot((SearchPage)));
