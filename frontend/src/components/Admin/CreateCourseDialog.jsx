import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCreateCourseHook } from "../../hooks/course.hook";
import { Loader2, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const CreateCourseDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit, reset: resetForm } = useForm();
  const { mutate, isPending } = useCreateCourseHook();

  const createCourseHandler = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("amount", data.amount);
    formData.append("thumbnail", data.thumbnail[0]);

    mutate(formData, {
      onSuccess: (res) => {
        toast.success(res.message);
        setIsOpen(false);
        resetForm();
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        disabled={isPending}
      >
        + Add Course
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
          <DialogDescription>
            <form
              className="mt-6 space-y-4"
              onSubmit={handleSubmit(createCourseHandler)}
            >
              <input
                {...register("title", { required: true })}
                placeholder="Course Title"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                {...register("description", { required: true })}
                placeholder="Course Description"
                rows={3}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                {...register("amount", { required: true })}
                placeholder="Price"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Modern Image Upload Placeholder */}
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                  <UploadCloud className="w-8 h-8 mb-3 text-slate-400" />
                  <p className="text-sm text-slate-600 font-semibold mb-1">
                    Click to upload course thumbnail
                  </p>
                  <p className="text-xs text-slate-400">
                    Recommended ratio: 16:9 (e.g., 1280x720px)
                  </p>
                </div>
                {/* The actual input is hidden, but clicking the label triggers it! */}
                <input
                  type="file"
                  accept="image/*"
                  {...register("thumbnail", { required: true })}
                  className="hidden"
                />
              </label>

              <button
                disabled={isPending}
                type="submit"
                className="w-full py-3 bg-blue-600 flex items-center justify-center text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Create Course"
                )}
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCourseDialog;
