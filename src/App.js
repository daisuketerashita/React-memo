import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { Modal } from './components/modal';
import { getLanguages } from './const/languages';
import { withLoading } from './hoc/withLoading';
import { Header } from './Header';



function App({data}) {
  const [tab,setTab] = useState('list');
  const [langs,setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs,lang]);
    setTab('list');
  }

  return (
    <div>
      <Header tab={tab} setTab={setTab} />
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default withLoading(App,getLanguages);
