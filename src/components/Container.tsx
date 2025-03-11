

/**
 * tried creatig this Container tag to add default styling details into it 
 * but getting maximum-call-stack-size-exceeded-error
 * therefore currently added mannual styling individually using classname
 * 
 */
import { cn } from "@/lib/utils"

interface ContainerProps extends React.ComponentProps<"div">{

}

const Container = ({children, className, ...props} : ContainerProps) =>{

    return(
        <div {...props} className={cn('max-w-5xl mx-auto px-5', className)}>
            <Container />
        </div>
    );
}

export default Container;