import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { CONTENT_QUERY } from '../../network/HomeApi';
import { styles } from './style';
import ContentCard from './ContentCard';
import SearchBar from '../../components/SearchBar';
import debounce from 'lodash.debounce';
import Loader from '../../components/Loader';
import { renderIf } from '../../utils/utility';

const Home = () => {
  const PAGE_SIZE = 20;
  const [pageNo, setPageNo] = useState(0);
  const [edges, setEdges] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { loading, fetchMore } = useQuery(CONTENT_QUERY, {
    variables: {
      limit: PAGE_SIZE,
      offset: 0,
      keyword: searchText,
    },
    onCompleted: data => setEdges(data?.contentCards?.edges),
  });

  function loadMoreData() {
    fetchMore({
      variables: {
        limit: PAGE_SIZE,
        offset: pageNo + 1 * PAGE_SIZE,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setPageNo(prev => prev + 1);
        setEdges(prev => [...prev, ...fetchMoreResult.contentCards.edges]);
      },
    });
  }

  const onSearch = useCallback(
    debounce(txt => {
      setSearchText(txt);
    }, 300),
  );

  return (
    <View style={styles.container}>
      <SearchBar text={searchText} onSearch={onSearch} editable={!loading} />
      <Loader visible={loading} />
      {renderIf(
        !loading,
        <FlatList
          data={edges}
          renderItem={ContentCard}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreData}
        />,
      )}
    </View>
  );
};

export default Home;
