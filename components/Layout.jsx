import styles from './layout.module.scss';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
  
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
