import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  RiSubtractLine,
  RiAddLine,
  RiBox3Line,
  RiComputerLine,
} from "@remixicon/react";

export function FieldsSection() {
  const [gpuCount, setGpuCount] = useState(8);
  const [wallpaper, setWallpaper] = useState(true);
  const [terms, setTerms] = useState(false);
  const [priceRange, setPriceRange] = useState([200, 800]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Fields</CardTitle>
        <CardDescription>
          Various field components for your forms.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {/* Compute Environment — Radio Card Group */}
        <fieldset className="grid gap-3">
          <Label>Compute Environment</Label>
          <RadioGroup
            defaultValue="kubernetes"
            className="grid grid-cols-2 gap-3"
          >
            <div>
              <RadioGroupItem
                value="kubernetes"
                id="kubernetes"
                className="peer sr-only"
              />
              <Label
                htmlFor="kubernetes"
                className="flex flex-col items-center gap-2 rounded-lg border-2 border-input p-4 text-center transition-colors peer-data-checked:border-primary peer-data-checked:bg-primary/5 cursor-pointer [&>svg]:size-6"
              >
                <RiBox3Line />
                <span className="font-medium">Kubernetes</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="virtual-machine"
                id="virtual-machine"
                className="peer sr-only"
              />
              <Label
                htmlFor="virtual-machine"
                className="flex flex-col items-center gap-2 rounded-lg border-2 border-input p-4 text-center transition-colors peer-data-checked:border-primary peer-data-checked:bg-primary/5 cursor-pointer [&>svg]:size-6"
              >
                <RiComputerLine />
                <span className="font-medium">Virtual Machine</span>
              </Label>
            </div>
          </RadioGroup>
        </fieldset>

        <Separator />

        {/* Number of GPUs — Counter */}
        <fieldset className="grid gap-3">
          <Label htmlFor="gpu-count">Number of GPUs</Label>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={() => setGpuCount((c) => Math.max(0, c - 1))}
              disabled={gpuCount <= 0}
            >
              <RiSubtractLine className="size-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <Input
              id="gpu-count"
              type="number"
              min={0}
              max={64}
              value={gpuCount}
              onChange={(e) => {
                const v = parseInt(e.target.value);
                if (!isNaN(v)) setGpuCount(Math.min(64, Math.max(0, v)));
              }}
              className="w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={() => setGpuCount((c) => Math.min(64, c + 1))}
              disabled={gpuCount >= 64}
            >
              <RiAddLine className="size-4" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </fieldset>

        <Separator />

        {/* Wallpaper Tinting — Switch */}
        <fieldset className="flex items-center justify-between gap-4">
          <Label htmlFor="wallpaper" className="cursor-pointer">
            Wallpaper Tinting
          </Label>
          <Switch
            id="wallpaper"
            checked={wallpaper}
            onCheckedChange={setWallpaper}
          />
        </fieldset>

        <Separator />

        {/* Terms — Checkbox */}
        <fieldset className="flex items-start gap-3 rounded-lg border border-input p-4">
          <Checkbox
            id="terms"
            checked={terms}
            onCheckedChange={(checked) => setTerms(checked === true)}
            className="mt-0.5"
          />
          <Label htmlFor="terms" className="cursor-pointer leading-snug">
            I agree to the{" "}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              terms and conditions
            </a>
          </Label>
        </fieldset>

        <Separator />

        {/* Price Range — Slider */}
        <fieldset className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label>Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ${priceRange[0]} – ${priceRange[1]}
            </span>
          </div>
          <Slider
            min={0}
            max={1000}
            step={50}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </fieldset>
      </CardContent>
    </Card>
  );
}
