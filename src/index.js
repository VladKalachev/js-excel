import {Excel} from './components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import './scss/index.scss';
import {createStore} from './core/createStore';
import {rootReducer} from './redux/rootReducer';
import {storage, debounce} from './core/utils';
import normalizeInitialState from './redux/initialState';
// const store = createStore(rootReducer, storage('excel-state'));
const store = createStore(rootReducer, normalizeInitialState);

const stateLictener = debounce(state =>
storage('excel-state', state), 300);

store.subscribe(stateLictener)

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
});

excel.render();
