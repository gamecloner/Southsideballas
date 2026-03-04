
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  serverName: z.string().min(1, { message: "Server Name / Character ID is required." }),
  discordUsername: z.string().min(1, { message: "Discord Username is required." }),
  age: z.string().min(1, { message: "Age is required." }),
  roleplayExperience: z.string().min(1, { message: "Roleplay Experience is required." }),
  whyJoin: z.string().min(1, { message: "This field is required." }),
  whatBring: z.string().min(1, { message: "This field is required." }),
  hoursPlayed: z.string().min(1, { message: "This field is required." }),
  previousGang: z.string().min(1, { message: "This field is required." }),
});

export function JoinBallasForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serverName: "",
      discordUsername: "",
      age: "",
      roleplayExperience: "",
      whyJoin: "",
      whatBring: "",
      hoursPlayed: "",
      previousGang: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-4xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="serverName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Server Name / Character ID</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Los Santos RP / #12345" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discordUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discord Username</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., user#1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="Your age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roleplayExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roleplay Experience</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe your roleplay experience." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whyJoin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why do you want to join South Side Ballas?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Explain your reasons for wanting to join." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatBring"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What can you bring to the gang?</FormLabel>
                <FormControl>
                  <Textarea placeholder="What skills or qualities will you contribute?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hoursPlayed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How many hours do you play daily?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 4-6 hours" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="previousGang"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Were you previously in any gang?</FormLabel>
                <FormControl>
                  <Input placeholder="If yes, which one?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </Form>
    </div>
  );
}
