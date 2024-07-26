import { Button } from  '../../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <Card className="w-1/4">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="user@skct.edu.in" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="******" />
                    </div>
                </CardContent>
                <CardFooter className="grid gap-4">
                <div className="grid gap-2">
                    <Button className="w-full">Login</Button>
                    </div>
                <div className=" flex justify-center items-center">
                    <span>Don't have an account? <Link  className="text-primary"  to="/register">Signup</Link></span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login