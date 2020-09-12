import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox/Checkbox'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
    const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(false)

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
            left={<div>
                produtos disponiveis:

                <Checkbox 
                    value={lettuce}
                    title="Alface"
                    onClick={() => setLettuce(!lettuce)}
                />
                <Checkbox 
                    value={rice}
                    title="Arroz"
                    onClick={() => setRice(!rice)}
                />
            </div>
            }
            middle={<div>
                sua lista de compras
            </div>
            }
            right={<div>
                estatisticas
            </div>
            }
            />
        </Container>
    </Wrapper>
}

export default App