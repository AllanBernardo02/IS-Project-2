import React, {useEffect} from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPostsCos } from '../actions/cosPosts.js';
import useStyles from './styles.js';

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getPostsCos(page));
    }
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/cos?page=${1}`} />
      )}
    />
  );
};

export default Paginate;