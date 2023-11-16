import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";

const RightSideHeader = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Button variant="ghost">
        <Link to="/login">Sign in</Link>
      </Button>
    );
  }

  return (
    <NavigationMenu className="w-max">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-2">
              <h3>
                {`
            ${user.first_name} ${user.last_name}
          `}
              </h3>
              <Avatar className="relative h-8 w-8">
                <AvatarImage
                  className="absolute z-0"
                  src="https://singlecolorimage.com/get/bf360c/100x100"
                />
                <h3 className="z-1 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-lg font-semibold text-white">
                  {user.first_name[0].toUpperCase()}
                </h3>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[240px] px-4 py-5">
            <ul className="flex flex-col justify-evenly gap-5">
              <li className="">
                <NavigationMenuLink>
                  <Link to="/profile" className="w-full">
                    <Button
                      variant="link"
                      size={"lg"}
                      className="grid w-full grid-cols-2 gap-4"
                    >
                      <User size={20} className="ml-8" />
                      <span className="mr-auto">Profile</span>
                    </Button>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>
                  <Button
                    variant="link"
                    size={"lg"}
                    className="grid w-full grid-cols-2 gap-4 "
                  >
                    <LogOut size={20} className="ml-8" />
                    <span className="mr-auto">Log out</span>
                  </Button>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default RightSideHeader;