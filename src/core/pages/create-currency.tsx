import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import type { Currency } from '../api/currency';
import { useCreateCurrency } from '../api/currency';
import { toast } from 'sonner';

export default function CreateCurrency() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const createCurrency = useCreateCurrency();
  
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [symbol, setSymbol] = useState('');
  const [isBase, setIsBase] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !code.trim() || !symbol.trim()) {
      toast.error(t('messages.error.required_fields'));
      return;
    }

    try {
      const formattedData: Currency = {
        name: name.trim(),
        code: code.trim(),
        symbol: symbol.trim(),
        is_base: isBase,
      };

      await createCurrency.mutateAsync(formattedData);
      toast.success(t('messages.success.created', { item: t('navigation.currencies') }));
      navigate('/currencies');
    } catch (error) {
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{t('common.create')} {t('navigation.currencies')}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currency_name">{t('forms.currency_name')} *</Label>
              <Input
                id="currency_name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('placeholders.enter_name')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">{t('forms.code')} *</Label>
              <Input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={t('placeholders.enter_code')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="symbol">{t('forms.symbol')} *</Label>
              <Input
                id="symbol"
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder={t('placeholders.enter_symbol')}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="is_base"
                checked={isBase}
                onCheckedChange={(checked) => setIsBase(checked as boolean)}
              />
              <Label htmlFor="is_base" className="text-sm font-normal cursor-pointer">
                {t('forms.is_base')}
              </Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                disabled={createCurrency.isPending}
                className="flex-1"
              >
                {createCurrency.isPending ? t('common.creating') : t('common.create')}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/currencies')}
                className="flex-1"
              >
                {t('common.cancel')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
