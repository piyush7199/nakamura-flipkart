import { ThemeProvider } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { createContext } from "react"
import { CssBaseline } from "@material-ui/core"

const TemplateContext = createContext(null)

export const TemplateProvider = ({ children }) => {
    const theme = createMuiTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset',
                },
            },
            MuiDialogContent: {
                root: {
                    padding: 0,
                    '&:first-child': {
                        paddingTop: 0
                    }
                }
            },
            MuiTableCell: {
                root: {
                    borderBottom: 0
                }
            }
        }
    })

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}