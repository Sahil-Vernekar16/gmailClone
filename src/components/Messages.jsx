import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../store/authSlice'
const Messages = () => {
  const dispatch = useDispatch()
  const emails = useSelector(store=> store.authSlice.emails)
  const searchText = useSelector(store => store.authSlice.searchText)
  const [tempMail, setTempMail] = useState(emails)

  useEffect(()=> {
    const queryfinal = query(collection(db, "emails"), orderBy("createdAt", "desc"))
    const unsubscribe = onSnapshot(queryfinal, (snapshot) => {
      const allEmails = snapshot.docs.map((doc)=> ({...doc.data(), id:doc.id}))
      dispatch(setEmails(allEmails))
    })
    return () => unsubscribe()
  },[])

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.to.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase())
    });
    setTempMail(filteredEmail);
  }, [searchText, emails]);

  return (
    <>
    {
      <div>
        {tempMail.map(email => (
          <Message key={email.id} email={email}/>
        ))}
      </div>
    }
    </>
  )
}

export default Messages