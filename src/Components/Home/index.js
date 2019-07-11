import React from 'react'
import { inject, observer } from 'mobx-react'
import { LoginWrap, Input, Button, Validator, Result, Overlay } from './styled'
import validateInput from '../../validators'

export default inject('app')(
    observer(({ app: { establishChain, input, setInput, combined, closeOverlay } }) => (
            <LoginWrap>
                <div>
                    <Input value={input} onChange={e => setInput(e.target.value)} placeholder='Enter value...' />
                    <Button disabled={validateInput(input) === false ? false : true} onClick={establishChain}>Proceed</Button>
                    <Validator username>{input.length > 0 && validateInput(input)}</Validator>
                </div>
                {combined !== null &&
                <Overlay>
                    <Result>Total: {combined}</Result>
                    <Button onClick={closeOverlay}>Close</Button>
                </Overlay>}
            </LoginWrap>
        )))