import React from 'react';
import { useGlobalContext } from './context';


const SetupForm = () => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className='setup-form'>

          <h2>Setup Quiz</h2>

          {/* Amount */}
          <div className='form-control'>
            <label htmlFor='amount'>Number of questions</label>
            <input 
              className='form-input' 
              type='number' 
              name='amount' 
              id='amount' 
              value={quiz.amount} 
              onChange={handleChange}
              min={1} 
              max={50}
            />
            <small>* 1-50</small>
          </div>

          {/* Category */}
          <div className='form-control'>
          <label htmlFor='category'>Category</label>
          <select 
            className='form-input' 
            name='category' 
            id='category' 
            value={quiz.category} 
            onChange={handleChange}
          >
            <option value='sports'>sports</option>
            <option value='history'>history</option>
            <option value='politics'>politics</option>
          </select>
          </div>

          {/* Difficulty */}
          <div className='form-control'>
          <label htmlFor='category'>Select Difficulty</label>
          <select 
            className='form-input' 
            name='difficulty' 
            id='difficulty' 
            value={quiz.difficulty} 
            onChange={handleChange}
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
          </div>

          { error && <p className='error'>Can't generate questions, please try different options!</p> }

          <button className='submit-btn' type='submit' onClick={handleSubmit}>Start</button>

        </form>
      </section>
    </main>
  )
};


export default SetupForm;